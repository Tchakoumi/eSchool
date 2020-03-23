import React from 'react'
import CompositionListItem from './CompositionListItem';
import './CompositionList.css';

export default function CompositionList(props)
{
    
        let domList = props.dataList.map((compos) => (
            <CompositionListItem key={compos.nomMatiere} typeCompos={compos.type} nomMatiere={compos.nomMatiere} link={compos.link} />
        ));
      return (
          <div className="container">
              <div className="proper-name">
                  <span>Composition</span>
              </div>
                <div className="comp">
                {domList}
                </div>
          </div>
      );
     
}