"use client";
import Image from "next/image";

export const DiclaimerComponent = () => {
  return <div></div>;
};
export const IncompleteWarningComponent = () => {
  return (
    <div className="dark:bg-zinc-700 bg-zinc-200 w-full py-4 pl-8 mb-8 rounded-sm text-lg">
      <h3>
        Disclaimer <span className="text-xl ml-2">⚠ </span>
      </h3>
      <p>This essay is incomplete as of now.</p>
      <p>Please let me know what you think I got wrong</p>
    </div>
  );
};

export const MetaDataComponent = () => {
  return <div></div>;
};

export const FooterComponent = ({ gratitude }: { gratitude: string[] }) => {
  return (
    <footer className="w-full border-t-4 mt-8 border-zinc-300 dark:border-zinc-600">
      <div className="flex justify-center items-center text-lg bg-zinc-200 dark:bg-zinc-700 py-4 mt-8 text-center">
        <p className="">Thanks to </p>
        {gratitude.map((grateful, key) => (
          <p key={key} className="mx-1">
            {grateful}
            {key === gratitude.length - 2
              ? " and"
              : key < gratitude.length - 2
              ? ","
              : ""}
          </p>
        ))}
        <p>for reading drafts of this essay</p>
      </div>
    </footer>
  );
};

export const HeaderImageComponent = () => {
  return (
    <div className="w-full mx-auto my-8">
      <Image
        src="/images/someone_in_pain.jpg"
        width={960}
        height={100}
        alt="Mental Health"
        className="object-cover h-80"
      />
    </div>
  );
};
