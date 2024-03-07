import React, { useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import { sampleUsers } from '../../constants/SampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroups = () => {

  const groupName = useInputValidation("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHedler = (id) => {
    setSelectedMembers((prev) => prev.includes(id)
      ? prev.filter((currElement) => currElement !== id)
      : [...prev, id]

    );
  };

  const submitHandler = () => { };

  const closeHandler = () => {};
  return (
    <Dialog open onClick={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>

        <DialogTitle textAlign={"center"} variant='h4'>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {
            members.map((i) => (
              <ListItem>
                <UserItem
                  user={i}
                  key={i._id}
                  handler={selectMemberHedler}
                  isAdded={selectedMembers.includes(i._id)}
                />
              </ListItem>
            ))
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant='outlined' color='error' size='large'>
            Cancel
          </Button>

          <Button variant='contained' size='large' onClick={submitHandler}>
            Create
          </Button>

        </Stack>

      </Stack>
    </Dialog>
  )
}

export default NewGroups
