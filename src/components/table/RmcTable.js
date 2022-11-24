import React from 'react';
import './rmctable.css';

const RmcTable = props => {
  const { headersName, children } = props;

  return (
    <table className="common-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}

export default RmcTable;