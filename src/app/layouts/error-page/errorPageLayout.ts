/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import {
	ComponentsService,
	LayoutComponent,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypeErrorPageComponent } from '../../components/error-page/typeErrorPageComponent';
import { Subscription } from 'rxjs';

/**
 * @name errorPageLayout
 * @id error-page-layout
 */
@LayoutComponent({
	selector: ComponentsService.DEFAULT_LAYOUT,
})
@Component({
	selector: 'app-error-page-layout-component',
	templateUrl: './errorPageLayout.html',
	styleUrls: ['./errorPageLayout.scss'],
})
export class ErrorPageLayoutComponent extends TypeErrorPageComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	rcSub: Subscription;

	errorMessageStr: string;

	ngOnInit() {
		super.ngOnInit();
		this.rcSub = this.onRenderingContext.subscribe(renderingContext => {
			this.rContext = renderingContext;
			this.errorMessageStr = `Problems rendering layout template`;
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		this.rcSub.unsubscribe();
	}
}