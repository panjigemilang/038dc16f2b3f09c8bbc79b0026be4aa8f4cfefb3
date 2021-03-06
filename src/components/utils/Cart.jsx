import React, { Fragment, useContext } from "react"
import { Context } from "../../context"
import { CartApp, Content, P, TransparentBg } from "./cartStyle"

// Material-ui Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

export default function Cart() {
  const { cartShow } = useContext(Context)

  return (
    <Fragment>
      <CartApp className={cartShow ? "show" : null}>
        <Content>
          <div>
            <P fontweight="900">5 Items | Rp 125.000</P>
            <P fontsize="12px">Termasuk ongkos kirim</P>
          </div>
          <a role="button">
            <ShoppingCartIcon />
            <ChevronRightIcon />
          </a>
        </Content>
      </CartApp>
      <TransparentBg className={cartShow ? "show" : null} />
    </Fragment>
  )
}
