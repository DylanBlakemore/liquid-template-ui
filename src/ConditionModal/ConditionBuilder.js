import React, { useState, useCallback } from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import { useConditionFields } from '../state'

import AntdConfig from "react-awesome-query-builder/lib/config/antd"
import AntdWidgets from 'react-awesome-query-builder/lib/components/widgets/antd'

import "antd/dist/antd.css"
import "react-awesome-query-builder/lib/css/styles.css"
import 'react-awesome-query-builder/lib/css/compact_styles.css'

const InitialConfig = {
  ...AntdConfig,
  settings: {
    ...AntdConfig.settings,
    maxNesting: 1,
    renderField: (props) => <FieldCascader {...props} />
  }
}

const queryValue = { id: QbUtils.uuid(), type: 'group' }

const { FieldCascader } = AntdWidgets

export function ConditionBuilder ({ context, onEdit }) {
  const fields = useConditionFields(context)

  const config = {
    ...InitialConfig,
    fields: fields
  }

  const [state, setState] = useState({
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config: config
  })

  const onChange = useCallback((immutableTree, config) => {
    setState((prevState) => {
      return { ...prevState, tree: immutableTree, config: config }
    })
    onEdit({
      string: QbUtils.queryString(immutableTree, config, true),
      logic: QbUtils.jsonLogicFormat(immutableTree, config),
      query: QbUtils.queryString(immutableTree, config)
    })
  }, [onEdit])

  const renderBuilder = useCallback((props) => (
    <div className='query-builder-container' style={{ padding: '10px' }}>
      <div className='query-builder qb-lite'>
        <Builder {...props} />
      </div>
    </div>
  ), [])

  return <Query
    { ...config }
    value={ state.tree }
    onChange={ onChange }
    renderBuilder={ renderBuilder }
  />
}
