import React from "react";

export const List = ({ prints }) => {
  return (
    <>
      <div data-testid="prints-list" className="row mt-4">
        <div className="col-sm-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <td className="w-25">
                  <p> Title </p>
                </td>
                <td className="w-30">
                  <p> Technique </p>
                </td>
                <td className="w-100">
                  <p> Image </p>
                </td>
              </tr>
            </thead>
            <tbody>
              {prints.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.technique}</td>
                    <td>{item.primaryimageurl && <img src={item.primaryimageurl} className="img-thumbnail" alt={item.title}/>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </>
  );
};
