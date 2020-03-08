import React from 'react';
import { withStyles, Typography, Hidden } from "@material-ui/core";
import GridContainer from "../uiComponent/Grid/GridContainer";
import GridItem from "../uiComponent/Grid/GridItem";
import buyerStyle from "./buyerStyle";
import { Link } from "react-router-dom";

import Button from "../uiComponent/CustomButtons/Button";

import intoImg from "../../assets/images/intro-image-2.png";
import intoImgSM from "../../assets/images/intro-image-2-1.png";
import notQualifyImg from "../../assets/images/buyer-image-1.png";
import qualifyImg from "../../assets/images/buyer-image-2.png";

class BuyerLandingPage extends React.Component {
    state = {
		activeStep: 0,
		skipped: new Set(),
		buyerFormData: {},
		completedSteps: []
	};
    render() {
        const { classes } = this.props;
		return(
			<div className={classes.buyerLandingRoot}>
				<section className={classes.intro}>
					<div className={classes.buyerLandingRootContainer}>
						<GridContainer className={classes.elementCenter}>
							<GridItem xs={12} sm={12} lg={12}>
								<div className={classes.calloutBox}>
									<GridContainer className={classes.elementCenterAlign}>
										<div className={classes.equalCont}>
											<Typography noWrap className={classes.title}>Create an Account :</Typography>
										</div>
										<div className={classes.equalCont}>
										<Link className="left-padding" to={`${process.env.PUBLIC_URL}/buyer-form`}>
											<Button color={"primary"} size="lg" className={classes.calloutBtn}>BUYER &nbsp;&nbsp;FORM</Button>
										</Link>
										</div>
									</GridContainer>
								</div>
							</GridItem>
						</GridContainer>

						<GridContainer className={classes.introContainer}>
							<GridItem xs={12} sm={12} md={5} lg={5} className={classes.buyerDescription}>
								<div className={classes.introContent}>
									<div className={classes.introHead}>
										<Typography variant="h3" className={classes.introHeadTitle}>We Qualify All of Our Buyers.</Typography>
										<Typography className={classes.introHeadSubTitle}>(so, you don't have to.)</Typography>
									</div>
									<Hidden mdUp>
										<div className={classes.introImg}>
											<img src={intoImgSM} alt="" />
										</div>
									</Hidden>
									<div className={classes.introContent}>
										<Typography className={classes.introText}>Rest easy, our Agents will qualify the end Buyer and help you manage the entire sale through the closing.</Typography>
									</div>
								</div>
							</GridItem>
							<Hidden mdDown>
								<GridItem xs={12} sm={12} md={7} lg={7} className={classes.buyerPicture}>
									<div className={classes.introImg}>
										<img src={intoImg} alt="" />
									</div>
								</GridItem>
							</Hidden>
						</GridContainer>
					</div>
				</section>
				<section className={classes.sectionFeature}>
					<div className={classes.buyerLandingRootContainer}>
						<Typography className={classes.featureText}>Don't deal with unqualified buyers with untested offers and risk losing valuable time, or worse: your property.</Typography>
						<GridContainer className={classes.elementCenter}>
							<GridItem xs={12} sm={12} lg={6} className={classes.featureImgContainer + " notQualify"}>
								<i className="sb-icon-cross-bold"></i>
								<img src={notQualifyImg} alt="" />
								<p className={classes.featureImgText}>NOT QUALIFIED</p>
							</GridItem>
							<GridItem xs={12} sm={12} lg={6} className={classes.featureImgContainer}>
								<i className="sb-icon-check-bold"></i>
								<img src={qualifyImg} alt="" />
								<p className={classes.featureImgText}>QUALIFIED</p>
							</GridItem>
						</GridContainer>
					</div>
				</section>
			</div>
		)
	}
}

export default withStyles(buyerStyle)(BuyerLandingPage);
