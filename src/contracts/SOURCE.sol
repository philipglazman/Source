pragma solidity ^0.4.18;

/**
* ERC-271 NFT Standard
*/
contract SOURCE {
    /**
    * RepId - Reputation identifier. It is the relationship between party A and party B. 
    */

    /***
    Events 
    ***/
    event Transfer(address _from, address _to, uint256 _RepId);

    /***
    Data Types 
    ***/

    struct Reputation 
    { 
        address endorser;
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
    mapping (address => uint256) internal ownershipReputationsCount;

    // Mapping each user to list of reputations.
    mapping (address => uint256[]) internal ownerToReputations;

    // Maps reputation id to owner.
    mapping (uint256 => address) internal reputationToOwner;

    // Mapping from Rep ID to index of the owner tokens list 
    mapping(uint256 => uint256) internal ownedReputationsIndex; 
    
    // Mapping from Rep ID id to position in the allTokens array 
    mapping(uint256 => uint256) internal allReputationsIndex;

    /*** 
    Utility Functions
    ***/

    // Transfers reputation from user to another user.
    function _transfer(address _from,address _to,uint256 _RepId) internal
    {
        ownershipReputationsCount[_to]++;

        reputationToOwner[_RepId] = _to;

        emit Transfer(_from,_to,_RepId);
    }

    // Returns the owner of a reputation.
    function _owns(address _owner, uint256 _RepId) view internal returns (bool) 
    {
        return reputationToOwner[_RepId] == _owner;
    }

    // Removes reputation from an address.
    function _removeReputationFrom(address _from, uint256 _RepId) internal {
        
        // Check that the address is owner of reputation.
        require(_owns(_from,_RepId));

        // Reduce count of reputations.
        ownershipReputationsCount[_from]--;
      
        // Change owner of reputation.
        reputationToOwner[_RepId] = address(0);
    }

    // Creates reputation.
    function _createReputation(address endorser, address _owner, uint32 _healthScore, uint32 _trustScore, uint32 _patienceScore) internal returns (uint256)
    {
        Reputation memory _reputation;
        
        //@TODO - change address of endorser to a hash, anonymize the endorser.
        _reputation.endorser = address(endorser);

        _reputation.creationTime = uint64(block.timestamp);
        _reputation.healthScore = uint32(_healthScore);
        _reputation.trustScore = uint32(_trustScore);
        _reputation.patienceScore = uint32(_patienceScore);
        
        uint256 repId = reputations.push(_reputation) - 1;

        _transfer(address(0),_owner, repId);

        return repId;
    }

    string public constant name = "SOURCE";
    
    function expireReputation(uint256 _RepId) external
    {
        // Only owner of reputation can expire the reputation.
        require(_owns(msg.sender,_RepId));

        // @TODO - make sure that the reputation is old enough (5 years)
        _removeReputationFrom(msg.sender, _RepId);
        _transfer(msg.sender, address(0), _RepId);
    }

    // Sets the reputation of _to according to the scores.
    function setReputation(address _to, uint32 _healthScore, uint32 _trustScore, uint32 _patienceScore)  external
    {
        require(_to != msg.sender);

        require(_healthScore > 0 && _healthScore <= 10);
        require(_trustScore > 0 && _trustScore <= 10);
        require(_patienceScore > 0 && _patienceScore <= 10);

        address endorser = msg.sender;
        
        uint256 repId = _createReputation(endorser, _to, _healthScore, _trustScore, _patienceScore);

        // Increment number of reputations.
        ownershipReputationsCount[_to]++;

        // Add reputation to user.
        ownerToReputations[_to].push(repId);

        _transfer(msg.sender,_to,repId);
    }

    function getReputionIdWithAddress(address _owner) view external returns (uint256[])
    {
        return ownerToReputations[_owner];
        // uint256[] storage allRepIds = ownerToReputations[_owner];

        // uint256[] memory repIds;
        // uint index = 0;

        // for(uint i = 0; i < allRepIds.length; i++)
        // {
        //     if(allRepIds[i] != 0)
        //     {   
        //         repIds[index] = allRepIds[i];
        //         index++;
        //         //repIds.push(allRepIds[i]);
        //     }
        // }
        // return repIds;
    }

    // function requestReputation(address _endorser) {}

    function getReputationWithId(uint256 _RepId) view external 
    returns 
    (uint64 _creationTime, uint32 _healthScore, uint32 _trustScore, uint32 _patienceScore)
    {
        Reputation storage _reputation = reputations[_RepId];

        _creationTime = _reputation.creationTime;
        _healthScore = _reputation.healthScore;
        _trustScore = _reputation.trustScore;
        _patienceScore = _reputation.patienceScore;        
    }

}