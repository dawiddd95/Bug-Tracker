// <Modal> {Children} nasz kod </Modal>  ------> zmiana hasłą oraz delete
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllUsers } from 'app/users/operations';
import { routes } from 'routes/index';
import { theme } from 'theme/mainTheme';
import { usersApi } from 'utils/api';
import MainPageTemplate from 'templates/MainPageTemplate';
import actions from 'app/users/actions';
import newIcon from 'assets/icons/new.svg';
import binIcon from 'assets/icons/bin.svg';
import exportIcon from 'assets/icons/export.svg';
import TableAntd from 'components/molecules/Table/Table';
import Modal from 'components/molecules/Modal/Modal';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import * as S from './StyledUsersPage';


const UsersPage = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users)
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState('')
    const [modalVisible, setModalVisibility] = useState(false)

    useEffect( async () => {
        setIsLoading(true);
        await dispatch(getAllUsers());
        setIsLoading(false);
    }, [])

    const showModal = (id) => {
        setUserId(id)
        setModalVisibility(true)
    }

    const handleCancel = () => {
        setModalVisibility(false)
    }
    
    const deleteUser = async () => {  
        const response = await axios.delete(`${usersApi}/${userId}`, {withCredentials: true})
        const { success } = response.data

        if(success) {
            dispatch(actions.deleteUser([userId]))
            setModalVisibility(false)
        }
    }

    const userColumns = [
        {
            title: 'Id', 
            dataIndex: 'id', 
            key: 'id'
        },
        {
            title: 'Name', 
            dataIndex: 'name', 
            key: 'name'
        },
        {
            title: 'Surname', 
            dataIndex: 'surname', 
            key: 'surname'
        },
        {
            title: 'Email', 
            dataIndex: 'email', 
            key: 'email'
        },
        {
            title: 'Type', 
            dataIndex: 'type', 
            key: 'type'
        },
        { 
            title: 'Action', 
            key: 'action',
            /* eslint-disable */
            render: ({id}) => 
            <>
                <S.Link color to={`${routes.users}/${id}/change-password`}>Change password</S.Link>
                <S.StyledButton background={theme.background.transparent} color={theme.background.red} onClick={() => showModal(id)}>
                    Delete
                </S.StyledButton>
            </>
            /* eslint-enable */
        },
    ];

    return (
        <MainPageTemplate>
            {modalVisible && <Modal 
                title='Delete user'
                txt='Are you sure to delete user?'
                visible={modalVisible}
                handleOk={deleteUser}
                handleCancel={handleCancel}
            />}
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/ Admin</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Users {userId}
                    </Header>
                    <S.ButtonsWrapper>
                        <StyledLink 
                            to={routes.newUser} 
                            button 
                            background={theme.background.primary}
                        >
                            <ButtonIcon src={newIcon} />
                            New
                        </StyledLink>
                        <Button fancy background={theme.background.white}>
                            <ButtonIcon src={binIcon} />
                            Delete
                        </Button>
                        <Button disabled>
                            <ButtonIcon src={exportIcon} />
                            Export to Excel
                        </Button>
                        <Button fancy background={theme.background.white}>
                            Audit
                        </Button>
                    </S.ButtonsWrapper>
                    <TableAntd 
                        data={users} 
                        columns={userColumns}
                        isLoading={isLoading}    
                    />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default UsersPage;