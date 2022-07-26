import { StoreProvider } from "easy-peasy";
import store from "./store";
import { useEffect } from "react";
import { Col, Container, Navbar, NavbarBrand } from "react-bootstrap";
import AddItem from "./components/AddItem";
import TodoItem from "./components/TodoItem";
import { useStoreState } from "./store/hooks";

type Props = StoreProvider["props"] & { children: React.ReactNode };

const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>;

const Content = () => {
  const items = useStoreState((state) => state.items);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar bg="light">
        <div className="container-fluid">
          <NavbarBrand>Easy Peasy State With React</NavbarBrand>
        </div>
      </Navbar>
      <Container className="my-4">
        <main>
          <div className="mb-5">
            <Col md="6" className="mx-auto">
              <AddItem />
            </Col>
          </div>

          {items.map(({ item, id }) => (
            <TodoItem item={item} id={id} key={id} />
          ))}
        </main>
      </Container>
      <footer className="bg-dark mt-auto">
        <div className="container-fluid py-3">
          <p className="text-center text-white mb-0">
            Build with <span className="text-danger">&hearts;</span> by{" "}
            <a className="text-white" href="https://www.melvinmanni.tech/" target="_blank" rel="noreferrer">
              Melvin Manni
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <StoreProviderCasted store={store}>
      <Content />
    </StoreProviderCasted>
  );
}

export default App;
