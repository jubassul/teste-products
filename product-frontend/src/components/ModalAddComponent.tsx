import { Box, Button, Modal, TextField } from "@mui/material";
interface IProps {
  open: any;
  handleClose: any;
  name: string;
  setName: any;
  stockQuantity: any;
  setStockQuantity: any;
  handleCreateProduct: any;
}

const ModalAddComponent = ({
  open,
  handleClose,
  name,
  setName,
  stockQuantity,
  setStockQuantity,
  handleCreateProduct,
}: IProps) => {
  const style = {
    fontFamily: 'Poppins',
    fontWeight: '700',
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <h3>
          Adicionar um produto na sua lista:
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
            onClick={() => handleCreateProduct()}
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAddComponent;
