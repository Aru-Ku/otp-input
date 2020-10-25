import * as React from 'react';
import { Ref, OtpProps } from './types';

const OtpInput = React.forwardRef<any, any>((props: OtpProps, ref: Ref) => {
  const { count = 6, id = `otp_input`, variant = `box`, borderColor = `black`, borderWidth, outline = "none"} = props;
  const wrapperStyle: React.CSSProperties = {
    maxWidth: `100%`,
    margin: 10,
    display: `flex`,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
  
  const borderStyle: React.CSSProperties = variant === "box" ? ({
    border: `${borderWidth | 1}px solid ${borderColor}`
  }) : ({border: `none`, borderBottom : `${borderWidth | 2}px solid ${borderColor}`});
  
  const inputStyle: React.CSSProperties = {
    width: `100%`,
    maxWidth: 30,
    height: 30,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 2,
    ...borderStyle,
    outline: outline
  }

  const handlePaste =(e:any, inputs:any) => {
    const paste = e.clipboardData.getData('text');
    inputs.forEach((input:any, i:any) => {
      input.value = paste[i] || '';
    });
  }

  const handleInput = (e:any) => {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
      input.nextElementSibling.focus();
    }
  }
  
  setTimeout(() => {
    const Wrapper = document.querySelector(`#${id}`);
    const inputs:any = Wrapper?.querySelectorAll('input');
    inputs[0]?.addEventListener('paste', (e:any) => handlePaste(e, inputs))
  }, 300)

  return (
    <div ref={ref} id={id} style={wrapperStyle} data-variant={variant} >
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <input style={inputStyle} key={index+1} onChange={handleInput} type={`text`} name={`otp_${index+1}`} maxLength={1} required={true} />
        ))}
    </div>
  );
});

export default OtpInput;