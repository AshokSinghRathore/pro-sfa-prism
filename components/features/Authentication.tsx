import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const AuthenticationFeature = () => {
  return (
    <section className="">
      <div className="container">
        <div className=" grid lg:grid-cols-2 w-full gap-4 lg:max-w-6xl mx-auto">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] grid place-items-center rounded-md text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <img
              src="../../prism-sfa/prism-sfa-login.png"
              alt="prism-sfa login image"
              className="w-full rounded-md object-cover"
            />
          </div>


          <div className="grid place-items-center rounded-md p-4">
            <div className="grid place-items-center">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary  sm:text-2xl lg:text-xl xl:text-2xl">
                <FontAwesomeIcon
                  className="h-5 w-5 p-3 border-2 border-white rounded-full"
                  icon={faLock}
                />{" "}
                Super Admin
              </h3>
              <p className="text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed">
                The Super Admin has full control over the system. They can
                create and manage users, define hierarchy, access all data, and
                oversee the entire sales process for complete organizational
                control.
              </p>
            </div>
          </div>

          <div className="grid place-items-center text-center rounded-md bg-body-color p-4">
            <div className="grid place-items-center">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                <FontAwesomeIcon
                  className="h-5 w-5 p-3 border-2 border-white rounded-full"
                  icon={faUser}
                />{" "}
                Reporting Manager
              </h3>
              <p className="text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed">
                Reporting Managers are responsible for monitoring their assigned
                Sales Members. They can review team performance, approve
                requests, track activities, and ensure smooth day-today
                operations.
              </p>
            </div>
          </div>

          <div className="grid place-items-center text-center rounded-md bg-body-color p-4 ">
            <div className="grid place-items-center">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                <FontAwesomeIcon
                  className="h-5 w-5 p-3 border-2 border-white rounded-full"
                  icon={faUsers}
                />{" "}
                Sales Member
              </h3>
              <p className="text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed">
                Sales Members are field-level users who log in daily to mark
                attendance, create journey plans, visit clients, take orders,
                and submit reports — enabling real-time tracking and efficient
                execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationFeature;
