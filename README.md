# @kurted/otp-input

OTP Input handler for react. (currenly uncontrolled component)

## Installation

```
npm install @kurted/otp-input
```

## Usage

```js
import OtpInput from '@kurted/otp-input';

const OTP_Component = () => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <OtpInput />
        <button type="submit">VERIFY</button>
      </form>
    </div>
  );
};
```

## Available Props

| Prop        | Type            | Description           | Defalut Value              |
| ----------- | --------------- | --------------------- | -------------------------- |
| count       | number          | length of OTP         | 6                          |
| id          | string          | id for component      | 'otp_input'                |
| variant     | ['box', 'line'] | input border style    | box                        |
| borderColor | string          | input border color    | 'black'                    |
| borderWidth | number          | input border width    | 1px for box & 2px for line |
| outline     | string          | input focus highlight | 'none'                     |
