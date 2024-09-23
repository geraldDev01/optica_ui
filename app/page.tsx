import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-red-500">Dashboard</h1>
      <Button variant="destructive" size="lg">
        Hola como estas
      </Button>
    </>
  );
}
