import React, {useState, useEffect} from "react";
import styles from './waitlist.module.scss';
import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import Footer from "../../components/UiKit/Layout/Footer";
import MediaCard from "../../components/Partials/MediaCards/MediaCards";
import WaitListSideBar from "../../components/Partials/WaitListSideBar/WaitlistSidebar";

function WaitList() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if(!mounted) return null;

  return (
    <>
      <HomeAppBar />

      <div className={styles['waitlist-container']}>
            <MediaCard  
                title ={'Vitamin D'}
                image={"VITAMIND.svg"} 
                descriptions={"ARTWork DESCRIPTION"} 
                creator={"ARMsir Studio"} 
                footerText={"This artwork was created by XXX for XXX."}
        
            />
           <WaitListSideBar />
      </div>
       
      <Footer />
    </>
  );
}

export default WaitList;
