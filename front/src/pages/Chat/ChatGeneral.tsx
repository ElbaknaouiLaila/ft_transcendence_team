import React from 'react'
import { Box, Stack } from '@mui/material'
import NoChat from '../../sections/NoChat'
import ChatTabs from './ChatTabs'
import Converstation from '../../sections/Converstation'

const ChatGeneral = () => {
    // const { contactInfo } = useSelector((store) => store.app);
    // const dispatch = useDispatch()
  return (
    <Stack direction={"row"} sx={{ width: "100%", height: "100vh" }}>
       <Stack direction={"column"} margin={"42px"}>
        <ChatTabs />
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        sx={{ borderRadius: "25px" }}
      >
        <Box
          sx={{
            height: "calc(100vh - 72px)",
            width: "calc(100vw - 750px)",
            backgroundColor: "#806EA9",
            marginY: "42px",
            borderRadius: "25px",
          }}
          className="shadow-2xl"
        >
          {/* <NoChat /> */}
          
          <Converstation />
        </Box>
      </Stack>

      {/* *** REDUX: if contact info open or not and which part *** */}
      
       {/* {contactInfo.open &&
        (() => {
          switch (contactInfo.type) {
            case "CONTACT":
              return <ContactInfos />;
            case "STARRED":
              return <StarredMsgs />;
            case "SHARED":
              return <SharedMsgs />;
            case "MODIFY":
              return <Profile />;
            default:
              return null;
          }
        })()} */}
    </Stack>
  )
}

export default ChatGeneral