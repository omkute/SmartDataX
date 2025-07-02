"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BeamFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        {/* Group 1 */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.user />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.unstructuredData />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.smartDataX />
          </Circle>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.insightfulData />
          </Circle>
        </div>
      </div>
      </div>

      <AnimatedBeam
        duration={3}
        delay={2}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
       <AnimatedBeam
        duration={5}
        delay={2}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        duration={5}
        delay={2}
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        duration={5}
        delay={2}
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div8Ref}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    ),
unstructuredData: () => (
  <div className="">
    {/* <image
    src='/data.svg'
    // height={300}
    // width={300}
    
    /> */}
    
  </div>
),
smartDataX: () => (
  <div className="">
   <Image
   src='/logo.png'
   width={50}
   height={40}
   alt="logo"
   className=""
   />
  </div>
),
insightfulData: () => (
  <div className="">
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 10 A40 40 0 1 1 10 50 L50 50 Z" fill="#F4B400" />
      <path d="M50 10 L50 50 L90 50 A40 40 0 0 0 50 10 Z" fill="#0F9D58" />
      <path d="M90 50 A40 40 0 0 1 50 90 L50 50 Z" fill="#DB4437" />
    </svg>
    <span className=" absolute text-xs text-center mt-1">Insightful Data</span>
  </div>
),


};
