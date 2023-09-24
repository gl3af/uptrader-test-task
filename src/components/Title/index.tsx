import "./style.scss";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="title">{children}</h1>;
}
