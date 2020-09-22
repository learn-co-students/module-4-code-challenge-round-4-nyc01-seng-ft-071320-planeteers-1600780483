import React from "react";

class Planeteer extends React.Component {
	state = {
		quoteOrBio: "bio",
	};

	clickHandler = () => {
		this.setState({
			quoteOrBio: this.state.quoteOrBio === "bio" ? "quote" : "bio",
		});
	};

	// usaChangeHandler = (e) => {
	// 	// e.target.value === true
	// 		// ? this.setState({ fromUSA: true })
	// 		// : this.setState({ fromUSA: false });
	// 	? "USA-based"
	// 	: "Working overseas"
	// };

	render() {
		return (
			<li className="cards__item">
				<div className="card">
					<img
						onClick={this.clickHandler}
						src={this.props.planeteer.pictureUrl}
						alt={this.props.planeteer.name}
						className="card__image"
					/>
					<div className="card__content">
						<div className="card__title">
							{this.props.planeteer.name}
						</div>
						<p className="card__text">
							{this.state.quoteOrBio === "bio"
								? this.props.planeteer.bio
								: this.props.planeteer.quote}
						</p>
						<div className="card__detail">
							<p>{this.props.planeteer.twitter}</p>
							<p>
								{this.props.planeteer.fromUSA === true
									? "USA-based"
									: "Working overseas"}
							</p>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default Planeteer;
