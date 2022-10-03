export default function AboutUser({img, name, career}){
    return(
            <div className="row">
                <div className="col-6">
                    <img className="profile-image" src={require(`../${img}`)}></img>
                </div>
                <div className="col-6">
                    <h3 className="profile-name">{name}</h3>
                    <p className="profile-career">{career}</p>
                </div>
            </div>
    );
}