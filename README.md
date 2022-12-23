## **Code Style Agreements**

1. `internal` or `private` functions are named **with** an underscore before the name.

    ```solidity
    contract ContractExample {
        function _calcI() internal {}
        function _calcP() private {}
    }

    ```

1. `internal` functions in "internal libs" (without `external` functions) are named **without** an underscore before the name.

    ```solidity
    library LibExample {
        function calcI() internal {}
        function _calcP() private {}
    }
    ```

1. `internal` or `private` `storage` variables are named **with** an underscore before the name.

    ```solidity
    uint256 internal _varA;
    uint256 private _varB;
    ```

1. Local variables (`memory`, `calldata`, etc.), including function arguments, are named **with** an underscore at the end of the name.

    ```solidity
    function _calc1(uint256 a_) private pure returns (uint256 c_) {
        uint256 d_ = 5;
        c_ = a_ + d_;
    }

    function _calc2(uint256[] memory arr1_, uint256[] calldata arr2_) private pure returns (uint256 c_) {
        c_ = arr1_[0] + arr2_[0];
    }
    ```

1. If you want to declare a local `storage` variable, the name of such a variable will have the **same** format as the
referenced `storage` variable.

    ```solidity
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

1. `event` parameters are named **without** lower handwriting. The name of the event must refer to an action that has already happened.

    ```solidity
    event Deposited(address to, uint256 value);
    ```

1. `const` and `immutable` are named **with** SCREAMING_SNAKE_CASE.

1. Comments in the `contract` can omitted.

1. Write full function comments in NatSpec format in the contract `interface` via multi-line comments.

1. The declaration of `events` and `structs` should be in the contract interface.

1. If there is no `interface`, everything is written in the `contract`.
