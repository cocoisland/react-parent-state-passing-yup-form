import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'palegoldenrod',
        padding: '20px',
    },
    card: {
        color: 'green',
        margin: '10px',  // spacing between cards
    },
});

const MemberLists = props => {
    const [radioSelected, setRadio] = useState('')
    const classes = useStyles();

    const formSubmit = e => {
        e.preventDefault();
    }

    function changeHandler(e) {
        setRadio(e.target.name)
        props.selectedMemberFunc(e.target.name)
    }

    return (
        <form onSubmit={formSubmit} >
        <div className={classes.root} >
            <Grid container direction="row" justify="center" alignItems="center" >
                {props.memberList.map(m => (
                    <Grid item xs={12} sm={6} md={3} key={m.name} >
                        <Card className={classes.card} > 
                            <CardHeader title={m.name} />
                
                            <label htmlFor='radioId'>
                                select
                                <input type='radio' 
                                    id='radioId' name={m.name} 
                                    value={m.name}
                                    checked={radioSelected === m.name} 
                                    // onChange={() => changeHandler(m.name)} 
                                    onChange={changeHandler}
                                    />
                            </label>
                            
                            <CardContent  >
                                <Typography>{m.email}</Typography>
                                <Typography>{m.role}</Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
        </form>
    )
}

export default MemberLists;