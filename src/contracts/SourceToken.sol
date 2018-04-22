pragma solidity ^0.4.18;

/**
* ERC-271 NFT Standard
*/
contract ERC271 {
    function totalSupply() public view returns (uint256);
    function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);
    function tokenByIndex(uint256 _index) public view returns (uint256);
}

/**
* ERC-271 NFT Standard, Metadata
*/
contract ERC271MetaData {
    function name() public view returns (string _name);
    function tokenURI(uint256 _tokenId) public view returns (string);
}

/**
* Contains all constants, data types, and basic functionality.
*/
contract SourceBase {

    /**
    * @var RepId - Reputation identifier. It is the relationship between party A and
    *              party B. It is the concatenation of party A and party B 40 char addresses.
    */

    /* Events */
    event Transfer(address _from, address _to, uint256 _RepId);

    /* Data Types */

    struct Reputation 
    { 
        // Time the reputation was created.
        uint64 creationTime;
        
        // Score judging the health choices of the recipient. 
        uint32 healthScore;

        // Score judging the trustworthiness of the recipient.
        uint32 trustScore;

        // Score judging the patience/delayed gratification of the recipient.
        uint32 patienceScore; 
    }

    Reputation[] reputations;

    // Mapping that counts the number of reputations a person has. 2^32 is maximum reputation.
    mapping (address => uint256) ownershipReputationsCount;

    // Maps reputation id to owner.
    mapping (uint256 => address) public reputationToOwner;

    // Mapping from Rep ID to index of the owner tokens list 
    mapping(uint256 => uint256) internal ownedReputationsIndex; 
    
    //Mapping from Rep ID id to position in the allTokens array 
    mapping(uint256 => uint256) internal allReputationsIndex;

    function _transfer(address _from,address _to,uint256 _RepId) internal
    {
        ownershipReputationsCount[_to]++;

        reputationToOwner[_RepId] = _to;

        emit Transfer(_from,_to,_RepId);
    }

    function _owns(address _owner, uint256 _RepId) internal returns (bool) 
    {
        return reputationToOwner[_RepId] == _owner;
    }

    function _removeReputationFrom(address _from, uint256 _RepId) internal {
        require(_owns(_from,_RepId));
        ownershipReputationsCount[_from]--;
        reputationToOwner[_RepId] = address(0);
    }

    function _createReputation(address _owner, uint32 _healthScore, uint32 _trustScore, uint32 _patienceScore) internal returns (uint)
    {
        Reputation memory _reputation;
        
        _reputation.creationTime = uint64(now);
        _reputation.healthScore = uint32(_healthScore);
        _reputation.trustScore = uint32(_trustScore);
        _reputation.patienceScore = uint32(_patienceScore);
        
        uint256 repId = reputations.push(_reputation)-1;

        return repId;
    }
}

/**
* /contains basic NFT transaction functionality. 
*/
contract SourceOwnership is SourceBase,ERC271 {

    string public constant name = "SOURCE";
    
    function transfer(address _to, uint256 _RepId) external
    {
        // @TODO - add check to make sure that msg.sender+_to == _RepID

        // @TODO - Cannot transfer recieving end of reputation
        
        _transfer(msg.sender,_to,_RepId);
    }

    function expireReputation(uint256 _RepId) external
    {
        // Only owner of reputation can expire the reputation.
        require(_owns(msg.sender,_RepId));

        // @TODO - make sure that the reputation is old enough (5 years)
        _removeReputationFrom(msg.sender, _RepId);
        _transfer(msg.sender, address(0), _RepId);
    }
}

contract SourceMinting is SourceOwnership {

    function createReputation() external
    {

    }   
}

contract SourceCode is SourceMinting {

    // function getReputation()
    // {
    // }
}