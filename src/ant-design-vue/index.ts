import type { App } from 'vue';
import {
    Button
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const components = [
    Button
]
export function setupAntd(app: App<Element>) {
    components.forEach(element => {
        app.use(element);
    });

}

