## **Code Style Agreements**
1. Internal or private functions are named with an underscore before the name.
    ```
    contract ContractExample {
        function _calcI() internal {}
        function _calcP() private {}
    }
    ```
1. Internal functions in "internal libs" (without external functions) are named without an underscore before the
name.
    ```
    library LibExample {
        function calcI() internal {}
        function _calcP() private {}
    }
    ```
1. Internal or private storage variables are named with an underscore before the name.
    ```
    uint256 internal _varA;
    uint256 private _varB;
    ```
1. Local variables (memory, calldata, etc.), including function arguments, are named with an underscore at the end.
    ```
    function _calc1(uint256 a_) private pure returns (uint256 c_) {
        uint256 d_ = 5;
        c_ = a_ + d_;
    }

    function _calc2(uint256[] memory arr1_, uint256[] calldata arr2_) private pure returns (uint256 c_) {
        c_ = arr1_[0] + arr2_[0];
    }
    ```
1. If you want to declare a variable of type storage, the name of such a variable will have the same format as the
storage variable.
    ```
    contract ContractExample {
        struct Pair {
            uint256 numA;
            uint256 numB;
        }

        Pair[] public pairs;
        Pair[] internal _pairs;
    
        function someNameA() external view returns (uint256) {
            Pair storage pair = pairs[0];
    
            return pair.numA;
        }
    
        function someNameB() external view returns (uint256) {
            Pair storage _pair = _pairs[0];
    
            return _pair.numB;
        }
    }
    ```
1. Event parameters are named without lower handwriting. The name of the event must refer to an action that has already
happened.
    ```
    event Deposited(address to, uint256 value);
    ```
1. Const and immutable are named with SCREAMING_SNAKE_CASE.
1. Comments in the implementation can be not written at all, and if you need to write them through a single line.
1. Write full function comments in NatSpec format in the contract interface via multi-line comments.
1. The declaration of events and structures should be in the contract interface.
1. If there is no interface, everything is written in the implementation.
