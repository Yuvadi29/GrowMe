import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const data = [
    {
        "department": "Marketing",
        "sub_departments": [
            "Advertising",
            "Public Relations",
            "Brand Management"
        ]
    },
    {
        "department": "Sales",
        "sub_departments": [
            "Inside Sales",
            "Outside Sales",
            "Account Management"
        ]
    },
    {
        "department": "IT",
        "sub_departments": [
            "Network Administration",
            "Software Development",
            "Help Desk"
        ]
    }
];

const DepartmentList = () => {
    const [expanded, setExpanded] = useState({});

    const handleToggleExpand = (department) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [department]: !prevExpanded[department]
        }));
    };

    return (
        <List>
            {data.map(department => (
                <React.Fragment key={department.department}>
                    <ListItem button onClick={() => handleToggleExpand(department.department)}>
                        <ListItemIcon>
                            <Checkbox checked={expanded[department.department]} edge="start" disableRipple />
                        </ListItemIcon>
                        <ListItemText primary={department.department} />
                        {expanded[department.department] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <List component="div" disablePadding>
                        {expanded[department.department] && department.sub_departments.map(subDepartment => (
                            <ListItem key={subDepartment} button className={{ root: { paddingLeft: '40px' } }}>
                                <ListItemIcon>
                                    <Checkbox edge="start" disableRipple />
                                </ListItemIcon>
                                <ListItemText primary={subDepartment} />
                            </ListItem>
                        ))}
                    </List>
                </React.Fragment>
            ))}
        </List>
    );
};

export default DepartmentList;
