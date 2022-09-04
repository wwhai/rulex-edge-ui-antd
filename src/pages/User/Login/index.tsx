import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { postLogin } from '@/services/rulex/yonghuguanli';
import { message } from 'antd';
import { history } from 'umi';
export default () => {
  const loginType = 'account';
  const onFinish = async (values: any) => {
    const response = await postLogin(values);
    if (response.code == 200) {
      message.info(response.msg);
    } else {
      message.error(response.msg);
    }
    history.push('/welcome')

  };

  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh - 48px)', margin: 0 }}>
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="/logo.png"
        title="RULEX Framework"
        subTitle="轻量级边缘网关开发框架"
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          ></div>
        }
        onFinish={onFinish}
      >
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}

        <div
          style={{
            marginBlockEnd: 24,
          }}
        ></div>
      </LoginFormPage>
    </div >
  );
};
