import { Dialog, DialogContent } from "@mui/material";
import { FC } from "react";
import { TPopup1 } from "../types/types";

const Popup1: FC<TPopup1> = ({ setIsOpenDialog, isOpenDialog }) => {
  const handleDialogClick = (event: any) => {
    event.stopPropagation();
  };

  const handleOutsideClick = () => {
    setIsOpenDialog(false);
  };

  return (
    <Dialog open={isOpenDialog} onClose={handleOutsideClick}>
      <DialogContent>
        <div className="dialog-content" onClick={handleDialogClick}>
          <h2 className="section-title">
            Terms and Conditions for use of EButler
          </h2>
          <div className="pop-line"></div>
          <p>
            By using EButler, you represent and warrant that you are 18 or
            older, and that you agree to and to abide by all of the terms and
            conditions of this agreement. <br />
            <br />
            If you disagree with any part of these terms and conditions, please
            DO NOT use the site.
          </p>
          <h3>A. Definitions</h3>
          <p>
            "Platform" means all EButler websites, mobile or other applications,
            software, processes and any other services provided by or through
            EButler. <br />
            <br />
            "User" means a person who completes EButler's account registration
            process or a person who submits or receives a request through
            EButler, including but not limited to Service Providers (“EButler
            Partners”) and Customers (“Customers”). <br />
            <br />
            "Customers" means a User who is registered to requests quotes for
            Jobs, receive quotes for Jobs, or otherwise uses the Platform for
            any other purposes. <br />
            <br />
            "Service Provider" means a User who is registered to have access to
            see Jobs, send quotes for Jobs, or otherwise uses the Platform for
            any other purposes ("Service Provider", "EButler Partner",
            "Business")"Jobs" means the services listed, quoted, scheduled,
            offered or provided by Service Providers, or sought, scheduled or
            received by Customers, through the Platform.
          </p>
          <h3>B. Acceptance of Terms and Conditions</h3>
          <p>
            1.EButler("Website", "Site", "Platform", "we", "our" or "us")
            provides the services contained in this site to you under these
            terms and conditions ("Terms"). <br />
            <br />
            2.All references to "you" or "your," as applicable, mean the person
            who accesses, uses, and/or participates in the Platform in any
            manner, and each of your heirs, assigns, and successors. If you use
            the Platform on behalf of an entity, you represent and warrant that
            you have the authority to bind that entity, your acceptance of the
            Terms will be deemed an acceptance by that entity, and "you" and
            "your" herein shall refer to that entity. <br />
            <br />
            3.Each time you access this Site, you confirm that you have read and
            understood the terms and conditions. We may amend these terms and
            conditions from time to time in our sole discretion and we recommend
            that you check them on a regular basis. <br />
            <br />
            4.By accessing this Site, you are indicating your agreement to be
            bound by all of these terms and conditions, including any amendments
            made to them from time to time. <br />
            <br />
            5.If you do not agree to these Terms and Conditions, then you are
            not permitted to use the Platform.
          </p>
          <h3>C. Payment Terms</h3>
          <p>
            If applicable, you agree to pay all fees or charges to your account
            based on EButler fees, charges, and billing terms then in effect.
            EButler reserves the right to provide other payment methods or to no
            longer offer certain payment methods. <br />
            <br />
            Users can choose between different payment methods provided on the
            platform, which are currently the following: Cash on Delivery and
            credit cards. Users are obliged to ensure sufficient cover of the
            respective account or, when using a credit card, to use the credit
            card only within the card transaction limit. If the non-cash payment
            methods do not cover the complete amount or encounter any errors
            resulting in the payment transaction not being completed, the user
            is required to cover the difference using cash or another payment
            method. <br />
            <br />
            Card data will be stored for future orders by the external online
            payment provider used by EButler for the payment gateway, on the
            condition that the user has given consent to the storage and future
            usage. The credit card information you provide will not be stored on
            the servers of EButler. The information is stored on the servers of
            the payment gateway provider which are secure. This is entirely for
            security and safety purposes. EButler works with reputable and
            trustable payment gateway providers only that issue a unique token
            that can’t be copied or replicated.
          </p>
          <h3>D. Delivery Time, Terms and Fees</h3>
          <p>
            The service shall be conducted at the time specified by the user
            (communicated to EButler or the service provider prior to the
            service fulfillment stage). <br />
            <br />
            During service fulfillment if the user is not available in the
            address communicated by the user to EButler or the service provider
            prior to the service fulfillment stage, the service ordered by the
            user shall not be conducted anywhere else. Within the framework of
            such a case, the user must accept all legal responsibilities arising
            from ordering a service to an address where he/she does not exist.{" "}
            <br />
            <br />
            There are no delivery fees for any service whose sole purpose is not
            delivery. For delivery-based services the delivery amount is the
            sole discretion of the service provider selected by the user or
            EButler Assistance; the delivery amount will be communicated to the
            user during the viewing and confirmation of the aforementioned
            service.
          </p>
          <h3>E. Order Cancellation</h3>
          <p>
            Users have the right to cancel a service up till 2 hours before
            service fulfillment is to take place. <br />
            <br />
            While every effort is made to ensure that accurate pricing and
            descriptions are maintained, we reserve the right to cancel any
            service order that is based on inaccurate information. <br />
            <br />A service may be subsequently cancelled by a service provider
            after users have received a confirmation that it has been sent to
            the restaurant. EButler and our service providers reserve the right
            to cancel any service, before or after confirmation, and will notify
            users immediately of any such cancellation.
          </p>
          <h3>F. Changes to this Policy</h3>
          <p>
            1. EButler reserves the right at any time and from time to time to
            update, revise, supplementand otherwise modify these Terms and
            Conditions and to impose new and/or additional rules, policies,
            terms and/or conditions on your use of the Platform (collectively
            referred to as "Additional Terms"). Such Additional Terms will be
            effective immediately and incorporated into these Terms and
            Conditions. Your continued use of the Platform constitutes your
            acceptance of all such Additional Terms. <br />
            <br />
            2. These terms and conditions constitute the entire agreement
            between you and the Site and supersede all prior representations,
            agreements, statements and understandings whether verbal or in
            writing
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup1;
