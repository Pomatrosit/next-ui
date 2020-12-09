import Head from "next/head";
import Modal from "../components/NextModal/NextModal";
import {useState} from "react";

export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick = {() => setModalOpen(true)}>Open Modal</button>

      { isModalOpen &&
        <Modal css={{padding:"20px", maxWidth:"300px"}}
               setModalOpen={setModalOpen}
               >
         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sint fugiat reiciendis, necessitatibus cumque, assumenda laudantium inventore modi, a voluptatem, aspernatur est. Reprehenderit aut, nam suscipit ratione totam recusandae inventore!</div>
         <div>Quibusdam omnis, laudantium ad molestias assumenda provident, itaque molestiae sed est tempora dolor repellat. Architecto eum, aperiam nemo corporis libero dolorem minima rem ab hic cupiditate esse, quibusdam praesentium ex.</div>
         <div>Placeat dolorem, nam laudantium, illum sequi enim maxime doloribus! Eveniet nemo laboriosam quam, neque aspernatur eligendi unde inventore quaerat quibusdam voluptates molestiae ratione veritatis ullam. Ad non, porro dolores quis.</div>
         <div>Odio ad iure illum voluptatum vitae eius sit, deleniti. In fugit hic minus commodi, quisquam nam facilis vitae sed, optio dolores praesentium ipsum. Veritatis sed ad id, alias quam illo.</div>
         <div>Maxime nemo, earum vitae eos deserunt consequuntur dolor accusantium esse odit ab veritatis, eligendi totam distinctio aliquid ullam deleniti quisquam! Quis reiciendis, rem reprehenderit nam magni, laudantium aut neque asperiores.</div>
      </Modal>
      }
    </div>
  )
}
