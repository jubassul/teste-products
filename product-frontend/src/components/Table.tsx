import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./table.css";
import api from "../services/api";
import ModalAddComponent from "./ModalAddComponent";
import ModalEditComponent from "./ModalEditComponent";

const TableComponent = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [stockQuantity, setStockQuantity] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#DCF2F1",
      fontWeight: "600",
      fontFamily: "Poppins, sans-serif",

    },
    [`&.${tableCellClasses.root}`]: {
      backgroundColor: "#365486",
    },
  }));

  const StyledTableCellTeste = styled(TableCell)(() => ({
    [`&.${tableCellClasses.root}`]: {
      backgroundColor: "#DCF2F1",
      fontSize: 14,
      fontFamily: "Poppins, sans-serif",

    },
  }));


  const handleEditRow = async (
    id: string,
    name: string,
    stockQuantity: number
  ) => {
    setName(name);
    setStockQuantity(stockQuantity);
    await api.updateProduct(id, name, stockQuantity);
    setOpenEdit(false);
    window.location.reload();
  };


  const handleDeleteProduct = async (id: string) => {
    await api.deleteProducts(id);
    window.location.reload();
  };

  const handleCreateProduct = async () => {
    setOpen(true);
    await api.createProducts(name, stockQuantity!);
    setOpen(false);
    window.location.reload();
  };

  const handleGetProducts = async () => {
    const products = await api.getProducts();
    setProducts(products);
  };
  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <>
      <div className="container-table">
        <div className="content-table">
          <TableContainer sx={{ borderRadius: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell>Quantidade em estoque(g)</StyledTableCell>
                  <StyledTableCell>Editar</StyledTableCell>
                  <StyledTableCell>Deletar</StyledTableCell>
                  <StyledTableCell> <button onClick={handleOpen} className="button-create"   >Criar</button>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product: any) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCellTeste component="th" scope="row">
                      {product.name}
                    </StyledTableCellTeste>
                    <StyledTableCellTeste>
                      {product.stock_quantity}
                    </StyledTableCellTeste>
                    <StyledTableCellTeste>
                      <EditNoteOutlinedIcon onClick={() => {
                        setId(product.id)
                        setName(product.name);
                        setStockQuantity(product.stock_quantity);
                        handleEditOpen();

                      }} />
                    </StyledTableCellTeste>
                    <StyledTableCellTeste>
                      <DeleteOutlineOutlinedIcon
                        onClick={() => handleDeleteProduct(product.id)}
                      />
                    </StyledTableCellTeste>
                    <StyledTableCellTeste>
                      <AddOutlinedIcon onClick={() => handleOpen()} />
                    </StyledTableCellTeste>

                    <ModalAddComponent
                      open={open}
                      handleClose={handleClose}
                      name={name}
                      setName={setName}
                      handleCreateProduct={handleCreateProduct}
                      stockQuantity={stockQuantity}
                      setStockQuantity={setStockQuantity}
                    />

                    <ModalEditComponent
                      openEdit={openEdit}
                      handleEditClose={handleEditClose}
                      name={name}
                      setName={setName}
                      id={id}
                      handleEditRow={handleEditRow}
                      stockQuantity={stockQuantity}
                      setStockQuantity={setStockQuantity}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
