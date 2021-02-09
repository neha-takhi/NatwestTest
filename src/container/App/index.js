import React, {useState, useEffect, useRef} from 'react';
import Header from '../../components/Header';
import {AppWrapper, LogoWrapper, CommunityWrapper,OurMenuWrapper} from './style';
import SideImageCard from '../../components/SideImageCard';
import ScrollAnimation from 'react-animate-on-scroll';
import {Tabs, Tab} from 'react-bootstrap';


export default function App() {
  const tab1ref = useRef();
  const tab2ref = useRef();
  const tab3ref = useRef();
  const [tabRef, setTabRef] = useState(tab1ref);
  
  const [key, setKey] = useState(0);
  useEffect(() => {
   const handleScroll = (e) => {
     
    let tabRefVal; 
    if(key === 0){
      tabRefVal = tab1ref;
    } else if (key === 1){
      tabRefVal = tab2ref;
    } else {
      tabRefVal = tab3ref;
    }
    setTabRef(tabRefVal);
    if(parseInt(tabRef.current.getBoundingClientRect().bottom) == parseInt(window.innerHeight)){
      const tabVal = (key+1) % 3 ;
      setKey(tabVal);
      window.scrollTo(0,0);
    }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
        document.removeEventListener('scroll', handleScroll);
    }
}, [key, tabRef])

  return (
    <AppWrapper>
     {/* <Header/> */}
     {/* <Counter/> */}
     <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      
    >
      <Tab eventKey={0} title="Logo">
        <LogoWrapper id="logo"  ref={tab1ref}>
          <img className="logo-image" src="/assets/stamp.png"></img>
          <img className="food-image" src="/assets/bg-pic.png"></img>
        </LogoWrapper>
      </Tab>
      <Tab eventKey={1} title="About-Us">
        <div id="about-us" ref={tab2ref}>
          <CommunityWrapper  justifyContent="flex-end" >
          <div className="heading">
            <div>MEET OUR</div>
            <div className="community">COMMUNITY</div>
            <div className="know-more">Know More</div>
            <div className="left-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="slide-image-card-wrapper">
            
          <ScrollAnimation animateIn="slideInUp">
          <SideImageCard 
          title="@buzzfeedfood"
          image={"/assets/bg-pic.png"}
          content="Its a taco Tuesday! These Tacos from @jessy have no added sugars and are so good. Find the recipe below"/>

          </ScrollAnimation>
          </div>
          
        </CommunityWrapper>
        <CommunityWrapper justifyContent="flex-start">
        <ScrollAnimation animateIn="slideInUp">
          <SideImageCard 
          title="@love_food"
          image={"/assets/bg-pic.png"}
          content="Its a taco Tuesday! These Tacos from @jessy have no added sugars and are so good. Find the recipe below"/>

          </ScrollAnimation>
        </CommunityWrapper>
        <CommunityWrapper justifyContent="flex-end">
        <ScrollAnimation animateIn="slideInUp">
          <SideImageCard 
          title="@love_food by West"
          image={"/assets/bg-pic.png"}
          content="Its a taco Tuesday! These Tacos from @jessy have no added sugars and are so good. Find the recipe below"/>

          </ScrollAnimation>
        </CommunityWrapper>
     </div>
      </Tab>
      <Tab eventKey={2} title="Our-Menu" >
      <OurMenuWrapper ref={tab3ref}  id="our-menu">
      <div className="menu-list">
        <ScrollAnimation animateIn="slideInUp">
        <div>Starters</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </ScrollAnimation>
      </div>
      <div className="menu-list">
      <ScrollAnimation animateIn="slideInDown">
        <div>Main Course</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

      </ScrollAnimation>
      </div>
      <div className="menu-list">
      <ScrollAnimation animateIn="slideInUp">
        <div>sides</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </ScrollAnimation>
      </div>
      <div className="menu-list">
      <ScrollAnimation animateIn="slideInDown">
        <div>desserts</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </ScrollAnimation>
      </div>
     </OurMenuWrapper>
      </Tab>
    </Tabs>
    </AppWrapper>
  );
}
