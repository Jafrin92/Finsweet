import React from "react";
import BottomFooter from "../components/bottomfooter/BottomFooter";
import Feaclient from "../components/featclient/Feaclient";
import FeatMission from "../components/featmission/FeatMission";
import FeatMission3 from "../components/featmission3/FeatMission3";
import FeatMossiontow from "../components/featmossiontow/FeatMossiontow";
import Featurebanner from "../components/featurebanner/Featurebanner";
import FeatureWorking from "../components/feature_working/FeatureWorking";
import Footer from "../components/footer/Footer";
import Frequently from "../components/frequently/Frequently";
import Navbar from "../components/navbar/Navbar";

const Feature = () => {
  return (
    <>
      <Navbar />
      <Featurebanner/>
      <FeatureWorking/>
      <Feaclient/>
      <FeatMission/>
      <FeatMossiontow/>
      <FeatMission3/>
      <Frequently/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Feature;
