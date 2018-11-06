import styled from 'styled-components';
import lighten from 'polished/lib/color/lighten';

const StyledIndex = styled.div`
  padding: 20px;
  margin-left: -15px;
  margin-right: -15px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
    font-family: "Cabin", sans-serif;
  }

  p {
    font-size: 16px;
    font-family: "Omnes", "Cabin", sans-serif;
    color: var(--white);
  }
  
  i {
 
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;
    max-width: 1024px;
    width: 100%;
    flex: 1;
  }

  footer {
    margin: 20px -20px -20px;
    padding: 20px;

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${lighten(0.35, '#4285F4')};
      margin: 0;
    }

    p a {
      color: ${lighten(0.35, '#4285F4')};
      text-decoration: underline;
    }
  }
  
  &#about {
    background: url("/dots.svg") no-repeat center;
    background-size: auto 100vw;
    height: 200vh;
    
    .about-section {
      .intro-p {
        margin-top: 140px;
      }
    }
  }
  
  &#hero {
    background: url("/mixer.png") center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 58px;
    box-shadow: var(--level3-shadow-dark);
    
    .hero-overlay {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      max-width: none;
      height: 100%;
      z-index: 1;
      opacity: .9;
      background: var(--blue);
    }
    
    .hero-content {
      display: flex;
      //flex-direction: column;
      height: 100%;
      z-index: 2;
      position: relative;
      text-align: left;
      align-items: center;
     
      
      &>div {
        margin: 16px 0;
        //text-align: left;
      }
      
      .card {
        box-shadow: var(--standard-shadow);
        background: var(--mid);
        padding: 40px;
        border-radius: 12px;
        width: 400px;
        
        & > h1 {
          margin-top: 0;
        }
        
        .flex {
          display: flex;
          
          .form-group {
            margin-right: 8px;
            flex: 1;
            
            &:last-child {
              margin-right: 0;
            }
          }
        }
        
        & > form {
          .form-holder {
            margin: 38px 0;
          }
        }
      }
      
      .hero-title {
        display: flex;
        flex: 1;
        align-items: center;
        margin-left: 24px;
        text-align: right;
        
        h1 {
          font-size: 46px;
          font-weight: 600;
        }
        
        .cursor {
          color: var(--accent);
        }
      }
    }
    
    .hero-scroll-down {
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      max-height: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;

    footer {
      margin: 30px -30px -30px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 40px;

    footer {
      margin: 40px -40px -40px;
    }
  }
  
  @media screen and (max-width: 768px) {
    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StyledIndex;
