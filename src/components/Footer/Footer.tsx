import * as React from 'react'
import { Context } from '../../context/ContextProvider'
import { FooterWrapper, StyledButton } from './Footer.styled'
import UI from './Footer.ui';

import { StyledColumn, StyledContainer, StyledRow, StyledSectionHeader } from '../GlobalStyle'
 
const Footer = () => {
  const { state, dispatch } = React.useContext<any>(Context)

  const { languageMode }: { languageMode: string } = state;

  const [ formData, setFormData ] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleField = (type: string, value: any) => {
      setFormData({...formData, [type]: value});
      console.log(formData);
  }

  const submitFormSpark = async () => {
    const url = 'https://submit-form.com/h66SFlSQ';

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData
      }),
    });

    setFormData({name: '', email: '', message: ''});
  }

  return (
    <FooterWrapper id="contact">
     <StyledContainer>
        <StyledRow>
            <StyledColumn>
                <StyledSectionHeader style={{marginBottom: 0}}><span>04.</span>{UI[languageMode].reachMe}</StyledSectionHeader>
                <p>{UI[languageMode].reachMeText}</p>
            </StyledColumn>
            <StyledColumn>
                <input type="text" name="name" placeholder={UI[languageMode].nameSurname} value={formData.name} onChange={e => handleField('name', e.target.value)} />
                <input type="email" name="email" placeholder={UI[languageMode].email} value={formData.email} onChange={e => handleField('email', e.target.value)} />
                <textarea name="message" placeholder={UI[languageMode].message} rows={5} value={formData.message} onChange={e => handleField('message', e.target.value)}></textarea>
                <StyledButton type="submit" value={UI[languageMode].send} onClick={submitFormSpark}/>
            </StyledColumn>
        </StyledRow>
     </StyledContainer>
    </FooterWrapper>
  )
}
export default Footer

