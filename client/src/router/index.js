import Vue from 'vue'
import Router from 'vue-router'
                        // @ = เริ่มที่ src
                        // ใช้componentไหนอย่าลืม!! import
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'



Vue.use(Router)

export default new Router({
  routes: [
    // 1{} = 1 สมาชิกใน Array หรือ 1 route
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // http://localhost:8080/#/test
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: '/user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: '/user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: '/user',
      component: UserShow
    }
  ]
})
