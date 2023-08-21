import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { StyledSpan } from '../styles/style';
import Login from "@/component/shared/Login";
import Register from "@/component/shared/Register";

const Member = () => {
  const [mem, setMember] = useState(true);

  return (
    <Container>
      <Box>
        {mem ? <Register /> : <Login />}
        <Typography align="center">
          {mem ? (
            <>
              Already have an account?{" "}
              <Button  onClick={() => setMember(!mem)}>
                Login
              </Button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Button  onClick={() => setMember(!mem)}>
                Register
              </Button>
            </>
          )}
        </Typography>
      </Box>
    </Container>
  );
};

export default Member;
