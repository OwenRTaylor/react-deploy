import React from "react";

const About = () => {
    return(
        <article className="About-header" id="about">
        <h2>About me</h2>
        <img src={require("../../assets/images/ProfilePic.png")}
        alt={"Owen Taylor"}
        className="About-img"
        key={'About-Image'}/>
        <p className="About-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
        </article>
    )
}
export default About;