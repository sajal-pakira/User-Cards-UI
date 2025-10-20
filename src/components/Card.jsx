const Card = ({
  availability,
  pay,
  image,
  name,
  about1,
  about2,
  skills,
  bio,
}) => {
  console.log(skills);

  return (
    <div className="card">
      <div className="top">
        <div className="availability">{availability}</div>
        <div className="pay">{pay}</div>
      </div>
      <div className="centre">
        <img src={image} alt="Profile image" />
        <h2>{name}</h2>
        <h4>{about1}</h4>
        <h5>{about2}</h5>
        <div className="tags">
          {skills.map((e, idx) => {
            return (
              <div key={idx} className="tag">
                {e}
              </div>
            );
          })}
        </div>
        <p>{bio}</p>
      </div>
      <div className="bottom">
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
