import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/Backvideo";
import Button from "./components/Button";

import Secondpage from "./components/Secondpage";
import Thirdpage from "./components/Thirdpage";
import Fourthpage from "./components/Fourthpage";
import Fifthpage from "./components/Fifthpage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Button />
      <BackgroundVideo />

      <Secondpage />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
    </div>
  );
};

export default HomePage;
