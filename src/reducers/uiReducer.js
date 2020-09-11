import { types } from '../types/types';
const initialState = {
    sidebarActivate: false,
    lastindex: -1,
    items: [{
        name: "ADMINISTRACION",
        activate: false,


    },
    {
        name: "FORMULARIOS",
        activate: false,


    },
    {
        name: "CUESTIONARIOS",
        activate: false,


    }
    ],
    subitems: [
        {
            items: [
                {
                    name: "UNIDADES",
                    activate: false,
                },
                {
                    name: "USUARIOS",
                    activate: false,
                }
            ]
        },
        {
            items: [
                {
                    name: "Factores clima",
                    activate: false,
                },
                {
                    name: "factores estadisticos",
                    activate: false,
                },
                {
                    name: "Formularios",
                    activate: false,
                }
            ]
        },
        {
            items: []
        }

    ]
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiOpenSideBar:

            return {
                ...state,
                sidebarActivate: !state.sidebarActivate
            };
        case types.uiCloseSideBar:
            return {
                ...state,
                sidebarActivate: false
            };
        case types.uiActivateItem:
            {
                if (state.lastindex != -1) {
                    state.items[state.lastindex].activate = false;

                }
                state.lastindex = action.payload;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, state.lastindex),
                        {
                            ...state.items[state.lastindex],
                            activate: true
                        },
                        ...state.items.slice(state.lastindex + 1)
                    ]

                };


            }
        default:
            {
                return state;
            }
        /*  case types.uiDeactivateItem:
{
 
}
*/



    }

}