import React from 'react'
import { useSelector } from 'react-redux'
import parse from "html-react-parser";
import { get } from 'lodash';
const Editor = () => {

    const jsonForm = useSelector((state) => get(state, "ResponseSlice.selectedResponse"));
    console.log('jsonform',jsonForm)
    const renderElement = (item) => {
        console.log('itemarsetop',item)
        const content = parse(item.element, {
          replace: (domNode) => {
            if (domNode.attribs) {
              // Apply styles to the top-level node
              Object.assign((domNode.attribs.style = {}), item.styles);
            }
          },
        });
        return content;
      };
  return (
    <div style={{display: 'flex', height: '90vh'}}>
      <div style={{flex: '1 0 50%', display: 'flex', flexDirection: 'column'}}>
      <div style={{height: '50vh', border: '1px solid black'}}>
          {renderElement(jsonForm)}
        </div>
      </div>
      <div style={{flex: '1 0 50%', display: 'flex', flexDirection: 'column'}}>
        {/* <div style={{height: '50vh', border: '1px solid black'}}>
          {renderElement(jsonForm)}
        </div> */}
        <div style={{height: '50vh', border: '1px solid black'}}>
        <pre style={{overflowY: 'auto'}}>
            {/* {Object.keys(jsonForm.styles).map(key => (
              <div key={key}>
                {key}: {jsonForm.styles[key]}
              </div>
            ))} */}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Editor

