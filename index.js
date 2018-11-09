//定义组件--全局
Vue.component('todo-item', {
    props: ['todo'],  // 定义了名为todo的自定义属性
    data: function() {
        return {
            fontsize: 1
        }
    },
    template: `
        <li v-bind:style="{fontSize: fontsize + 'em' }">
            {{ todo.text }}
            <button v-on:click=" fontsize += 0.1">单条放大0.1字号</button>
            <button v-on:click="$emit('enlarge-text', 0.1)">整体放大0.1字号</button>
        </li>
        `
});

Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
        `
});


// 局部组件定义
var ComponentA = {
    // props: ['todo'],  // 定义了名为todo的自定义属性
    data: function() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'wml1',
                    content: 'hello wml1'
                },
                {
                    id: 2,
                    title: 'wml2',
                    content: 'hello wml2'
                },
                {
                    id: 3,
                    title: 'wml3',
                    content: 'hello wml3'
                },
            ],
            curCont: ''
        }
    },
    template: `
       <div class="post-block">
        <ul class="post-slideBar">
            <li v-for="post in posts"
                v-bind:key="post.id"
                v-bind:class="{active: curCont.id == post.id}"
                v-on:click="curCont = post"
            >   
            {{post.title}}
            </li>
        </ul>
        
        <div class="post-contain" v-if="curCont = curCont ? curCont: posts[0]">
            <p class="hd">{{curCont.title}}</p>
            <p class="content">{{curCont.content}}</p>
        </div>
       </div>
        `
};

var ComponentB = {
    template: `
        <div class="demo-alert-box">
         Archive component 
        </div>
        `
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world',
        date: '现在是'+new Date().toLocaleString(),
        seen: true,
        todos: [
            {id:0, text: 'wml0'},
            {id:1, text: 'wml1'},
            {id:2, text: 'wml2'}
        ],
        rawHtml:  '<span style="color: red">This should be red.</span>',
        counter: 0,
        changeTxt: '',
        lazyInputTxt: '',
        olFontSize: 1,
        tabs: ['tab-content1', 'tab-content2'],
        currentTab: 'tab-content1'
    },
    components: {
        'tab-content1': ComponentA,
        'tab-content2': ComponentB
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        },
        warn: function(msg, event) {
            console.log(msg, event)
        },
        changeInput: function(event) {
            this.changeTxt = event.target.value
        }
    },
    computed: {
        reverseMsg: function(){
            return this.message.split('').reverse().join('')
        },
        now: function () {  //计算属性是基于它们的依赖进行缓存的，依赖发生变化才会重新求值
            return Date.now()
        }
    },
    watch: {  //监听data数据变化
        message: function(newmsg, old) {
            console.log(newmsg,old);
        }
    }
  })

  app.todos.push({text: 'wml3'})