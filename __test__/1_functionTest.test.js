// Задание 1. Настроить тестовое окружение JEST

// Можно склонировать репозиторий и вести разработку в нем, либо создать свой собственный.

// Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»

// добавить ее в репозиторий;
// продумать тест-кейсы (успешное/неуспешное выполнение функции);
// продумать корнер-кейсы; 
// написать unit-тесты (минимум 3).

    // Задание 2
    // Напишите функцию getPercents(percent, number), 
    // которая возвращает {percent} процентов от {number}.

const getPercents = require("../1_functionTest.js");

describe(
    "correct tests",
    () => {
        const test1_per = 30;
        const test1_num = 100;
        const test1_res = test1_num*test1_per/100;

        const test2_per = 30;
        const test2_num = 200;
        const test2_res = test2_num*test2_per/100;
        
        const test3_per = 200;
        const test3_num = 200;
        const test3_res = test3_num*test3_per/100;

        it(
            `${test1_per} persents of ${test1_num} is ${test1_res}`,
            () => {
                expect(getPercents(test1_per,test1_num)).toBe(test1_res)
            }
        )
        
        ,
        it(
            `${test2_per} persents of ${test2_num} is ${test2_res}`,
            () => {
                expect(getPercents(test2_per,test2_num)).toBe(test2_res)
            }
        )

        ,
        it(
            `${test3_per} persents of ${test3_num} is ${test3_res}`,
            () => {
                expect(getPercents(test3_per,test3_num)).toBe(test3_res)
            }
        )

        ,
        it(
            "[30] persents of 100",
            () => {
                expect(getPercents([30],100)).toBe(30)
            }
        )
    }
)

describe(
    "incorrect tests",
    () => {
        it(
            "a persents of 100",
            () => {
                expect(getPercents(a,100)).toBe(30)
            }
        )
        
        ,
        it(
            "'b' persents of 100",
            () => {
                expect(getPercents('b',100)).toBe(30)
            }
        )

        ,
        it(
            "[30,20] persents of 100",
            () => {
                expect(getPercents([30,20],100)).toBe(30)
            }
        )
    }
);


describe(
    "corner tests",
    () => {
        describe(
            "incorrect tests",
            () => {
                const test1_per = NaN;
                const test1_num = 100;
                const test1_res = NaN;
        
                const test2_per = 0;
                const test2_num = 200;
                const test2_res = 0;
                
        
                it(
                    `${test1_per} persents of ${test1_num} is ${test1_res}`,
                    () => {
                        expect(getPercents(test1_per,test1_num)).toBe(test1_res)
                    }
                )
                
                ,
                it(
                    `${test2_per} persents of ${test2_num} is ${test2_res}`,
                    () => {
                        expect(getPercents(test2_per,test2_num)).toBe(test2_res)
                    }
                )
        
                // ,
                // it(
                //     `${test3_per} persents of ${test3_num} is ${test3_res}`,
                //     () => {
                //         expect(getPercents(test3_per,test3_num)).toBe(test3_res)
                //     }
                // )
            }
        );
    }
);
