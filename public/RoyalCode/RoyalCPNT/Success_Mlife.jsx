import React from "react";

function Success_Mlife({img,discrption}) {
  return (
    <>
      <div className="col custom-col mb-30">
        <article className="team__card">
          <div className="team__card--thumbnail">
            <img
              className="team__card--thumbnail__img display-block"
              src={require(`../../all_style/img/success/${img}`)}
              alt="team-thumb"
            />
          </div>
          <div className="team__card--content ">
            <span className="team__card--content__subtitle text__secondary text-center">
             {discrption}
            </span>
          </div>
        </article>
      </div>
    </>
  );
}

export default Success_Mlife;
