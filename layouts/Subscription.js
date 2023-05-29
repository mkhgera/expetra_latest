"use client";
import { markdownify } from "@lib/utils/textConverter";
import Cta from "./components/Cta";
import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAddress } from "@thirdweb-dev/react";
import Modal from "./components/Modal";
import NoPremiumModal from "./components/NoPremiumModal";
import { useAuthContext } from "../firebase/AuthContext";

const contractAddress = "0xFeF73CcFB94D033ff1A663B40431941834694e04";
const Subscription = ({ data }) => {
  const { frontmatter } = data;
  const { about_us, works } = frontmatter;
  const { user } = useAuthContext();
  // const router = useRouter();

  // React.useEffect(() => {
  //   if (user == null) router.push("/");
  //   console.log(user)
  // }, [user]);

  const address = useAddress();
  const sdk = ThirdwebSDK.fromPrivateKey(
    "1eb079bca5b3f94623d5265de4697caf8b76de10636dead83722865bfda932a4",
    "binance-testnet"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  async function checkBalance(sdk, address) {
    const editionDrop = await sdk.getNFTDrop(contractAddress);
    const balance = await editionDrop.balanceOf(address, 0); //, 0);
    console.log(balance);
    setIsOpen(true);

    if (balance.gt(0)) {
      updatePremium();
      setModalType("premium");
      // setHas(true);
    } else {
      setModalType("basic");
    }
  }

  function updatePremium() {
    const docRef = doc(db, "users", user.uid);
    updateDoc(docRef, { isPremiumUser: true });
  }

  return (
    <>
      <section className="section pt-0">
        <div className="section container">
          <div className="animate grid-1 grid gap-3 text-center">
            <div>
              {markdownify(
                about_us.title,
                "h2",
                "section-title mt-4 text-light"
              )}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
            {user ? (
              <div>
                <h4 className="text-primary">Welcome, {user.email}!</h4>
                <div>
                  <ConnectWallet />
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => checkBalance(sdk, address)}
                  >
                    Get Premium
                  </button>
                  {modalType === "premium" && (
                    <Modal setIsOpen={setIsOpen} setModalType={setModalType} />
                  )}
                  {modalType === "basic" && (
                    <NoPremiumModal
                      setIsOpen={setIsOpen}
                      setModalType={setModalType}
                    />
                  )}
                </div>
              </div>
            ): <h4 className="text-primary">Sign in to the system!</h4>}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Subscription;
