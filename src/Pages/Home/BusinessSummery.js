import React from "react";
import { TiWorld } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi";
import { GrPersonalComputer } from "react-icons/gr";

const BusinessSummery = () => {
  return (
    <div className="mx-5">
      <h2 className="text-center text-4xl text-primary font-bold my-5">
        This is our Company Success
      </h2>
      <div className="mb-5">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="flex justify-center text-4xl text-slate-400">
              <TiWorld />
            </div>
            <div className="flex justify-center stat-value">4+</div>
            <div className="flex justify-center stat-desc">Country</div>
          </div>
          <div className="stat">
            <div className="flex justify-center text-4xl text-slate-400">
              <HiUserGroup />
            </div>
            <div className="flex justify-center stat-value">1000+</div>
            <div className="flex justify-center stat-desc">Customers</div>
          </div>
          <div className="stat">
            <div className="flex justify-center text-4xl text-slate-400">
              <GrPersonalComputer />
            </div>
            <div className="flex justify-center stat-value">1000000+</div>
            <div className="flex justify-center stat-desc">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
