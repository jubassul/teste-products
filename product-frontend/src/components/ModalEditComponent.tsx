import { Box, Button, Modal, TextField } from "@mui/material";

interface IProps {
  openEdit: any;
  name: string;
  setName: any;
  stockQuantity: any;
  setStockQuantity: any;
  handleEditRow: any;
  id: any;
  handleEditClose: any
}

const ModalEditComponent = ({
  openEdit,
  name,
  setName,
  stockQuantity,
  setStockQuantity,
  handleEditRow,
  handleEditClose,
  id,
}: IProps) => {

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={openEdit}
      onClose={handleEditClose}
    >
      <Box sx={style}>
          <h3>
          Editar um produto na sua lista:
          </h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
          className="container-input"
        >
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Quantidade em Estoque"
            value={stockQuantity}
            variant="outlined"
            onChange={(e) => setStockQuantity(Number(e.target.value))}
          />

          <Button
            variant="contained"
            onClick={() => handleEditRow(id, name,stockQuantity)}
            >
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditComponent;
