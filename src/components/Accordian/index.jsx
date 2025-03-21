import React from 'react';
import Button from '../button';
import tokens from '../../json/colors';
import Image0 from '../../assets/images/fly_fishing0.jpg';
import Image1 from '../../assets/images/fly_fishing1.jpg';
import Image2 from '../../assets/images/fly_fishing2.jpg';

// Accordion component
const Accordion = ({ btnColor, accStyle, accBody }) => {
  // Accordion items data
  const items = [
    {
      title: 'Explore Fly Fishing',
      description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      btnText: 'Learn more',
      img: Image0,
    },
    {
      title: 'Fly Fishing Experiences',
      description: 'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
      btnText: 'Learn more',
      img: Image1,
    },
    {
      title: 'Gear Up and Catch More',
      description: 'In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S',
      btnText: 'Learn more',
      img: Image2,
    }
  ];

  // Styles for the title and description inside the accordion
  const insideTitleStyle = {
    color: tokens.colors.neutral[90],
    ...tokens.type.heading.small,
  };

  const insideDescStyle = {
    ...tokens.type.body.medium,
    color: tokens.colors.neutral[60],
  };

  return (
    <div>
      {/* Bootstrap Accordion */}
      <div className='accordion' id='accordionExample'>
        {items.map((item, index) => (
          <div className='accordion-item' style={accStyle} key={index}>
            {/* Accordion Header */}
            <h2 className='accordion-header' id={`heading${index}`}>
              <button
                style={btnColor}
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            {/* Accordion Content */}
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent='#accordionExample'
            >
              <div className='row position-relative' style={accBody}>
                <div className='col-md-4'>
                  <img src={item.img} className='acc_img img_fluid' alt='' />
                </div>
                <div className='col-md-8'>
                  <div className='accordion-body'>
                    <p style={insideTitleStyle}>{item.title}</p>
                    <p style={insideDescStyle}>{item.description}</p>
                    <Button
                      style={{
                        background: tokens.colors.neutral[10],
                        color: tokens.colors.neutral[90],
                        fontSize: tokens.sizes[14],
                      }}
                      className='large-default-primary learanmore'
                    >
                      {item.btnText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Simple View (Non-Accordion) */}
      {items.map((item, index) => (
        <div key={index} className='simple-view row position-relative' style={accBody}>
          <div className='col-md-4'>
            <img src={item.img} className='acc_img img_fluid' alt='' />
          </div>
          <div className='col-md-8'>
            <div className='accordion-body'>
              <p style={insideTitleStyle}>{item.title}</p>
              <p style={insideDescStyle}>{item.description}</p>
              <Button
                style={{
                  background: tokens.colors.neutral[10],
                  color: tokens.colors.neutral[90],
                  fontSize: tokens.sizes[14],
                }}
                className='large-default-primary'
              >
                {item.btnText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
