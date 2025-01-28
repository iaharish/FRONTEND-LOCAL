import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import { Button, Input, RadioGroup, Box, Typography, Radio, radioClasses, Sheet, FormLabel } from '@mui/joy';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Login = () => {
    const navigate = useNavigate();
    // Initialize state for form data
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        userType: 'ADMIN'
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login attempted with:', formData);

        requestBody = {
            username: formData.username,
            password: formData.password
        }
        fetch("http://localhost:8060/api/auth/validate/user",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then((response)=>{
            if(!response.ok){
                alert("Login failed")
                throw new Error("Login failed")
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const{username,roleName,token}=data;
            localStorage.setItem("authToken", token);
            if(roleName=="ADMIN") {
                console.log("Logged in as Admin")
                navigate('/project-type');
            } else if(roleName=="TAILOR"){
                alert('Logged in as Tailor');
            }
        })
        // Navigate to ProjectType if user is an admin
        if (formData.userType === 'ADMIN') {
            navigate('/project-type');
        }
    };

    // Handle clearing the form
    const handleClear = () => {
        setFormData({
            username: '',
            password: '',
            userType: 'ADMIN'
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'background.paper'
            }}
        >
            <Box
                sx={{
                    width: 400,
                    p: 4,
                    borderRadius: 'lg',
                    boxShadow: 2,
                    backgroundColor: 'white'
                }}
            >
                <Typography level="h2" align="center" sx={{ mb: 2, fontFamily: 'Rock Salt, cursive' }}>
                     Tailor Management Portal
                </Typography>

                <form onSubmit={handleSubmit}>
                    {/* <RadioGroup
                        row
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        sx={{ display: 'inherit', justifyContent: 'space-between', gap: 2 }}
                    >
                        <Radio value="ADMIN" label="Admin" />
                        <Radio value="TAILOR" label="Tailor" />
                    </RadioGroup> */}
                    <RadioGroup
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        defaultValue="Admin"
                        overlay
                        sx={{
                          flexDirection: 'row',
                          gap: 2,
                          [`& .${radioClasses.checked}`]: {
                            [`& .${radioClasses.action}`]: {
                              inset: -1,
                              border: '3px solid',
                              borderColor: 'primary.500',
                            },
                          },
                        [`& .${radioClasses.radio}`]: {
                          display: 'contents',
                          '& > svg': {
                            zIndex: 2,
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            bgcolor: 'background.surface',
                          borderRadius: '50%',
                        },
                        },
                        }}                   
    >                  
                      {['Admin', 'Tailor'].map((value) => (
                        <Sheet
                          key={value}
                          variant="outlined"
                          sx={{
                            borderRadius: 'md',
                            boxShadow: 'sm',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            minWidth: 100,
                          }}
                        >
                          <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
                          <Avatar variant="soft" size="sm" />
                          <FormLabel htmlFor={value}>{value}</FormLabel>
                        </Sheet>
                      ))}
                    </RadioGroup>
                    <p></p>
                    <Box sx={{ mb: 2 }}>
                        <Input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            required
                            fullWidth
                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            fullWidth
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            type="submit"
                            variant="solid"
                            color="primary"
                            sx={{ flexGrow: 1 }}
                        >
                            Login
                        </Button>
                        <Button
                            type="button"
                            variant="outlined"
                            color="neutral"
                            onClick={handleClear}
                            sx={{ flexGrow: 1, ml: 2 }}
                        >
                            Clear
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
