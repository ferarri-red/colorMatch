import { ColorPicker } from "../components/ColorMatch";

export const App = () => {
  return (
    <main
      className={
        "w-full h-screen bg-gray-200 flex flex-col items-center justify-center"
      }
    >
      <h1 className={"text-gray-500 text-4xl mb-4"}>MatchColor and copy #HEX</h1>

      <section className={"flex gap-4"}>
        <ColorPicker value={"#ff1e00"} />
        <ColorPicker value={"#90c0c4"} />
        <ColorPicker value={"#90ff00"} />
      </section>

      <section className={"flex gap-4 mt-4"}>
        <ColorPicker value={"#ea9d9d"} />
        <ColorPicker value={"#0086ff"} />
        <ColorPicker value={"#5e7251"} />
      </section>
    </main>
  );
};
