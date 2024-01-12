import { Slider } from "./ui/slider";

export default function SliderComp() {
  return (
    <>
      <Slider defaultValue={[90]} max={100} step={1} className="text-amber-500" />
    </>
  );
}
